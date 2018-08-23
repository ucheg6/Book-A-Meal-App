import format from 'date-fns/format';
import { op } from 'sequelize';
import { Menus, Meals } from '../models';

class MenuController {
    static async setupMenu(req, res) {
        const { title, mealIds } = req.body;
        const error = {};

        const currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0);

        const matchedMenu = await Menus.findOne({
            where: {
                created_at: {
                    [op.gte]: format(currentDate),
                },
            },
        });

        if (matchedMenu) {
            error.message = 'Menu for the day has been set';
            return res.status(409).json({
                message: error.message,
                status: 'error',
                error,
            });
        }
        const menu = await Menus.create({ title });
        await menu.addMeals(mealIds);
        const returnedMenu = await MenuController.findById(menu.Id, {
            include: [{
                model: Meals,
                attributes: ['id', 'title', 'description', 'price', 'imgUrl'],
                as: 'meals',
                through: { attributes: [] }
            }],
        });
        return res.status(201).json({
            message: 'Menu successfully created for the day!!',
            status: 'success',
            menu: returnedMenu

        });


    }
    static async getMenu(req, res) {
        const error = {};
        const currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0);

        const todayMenu = await Menus.findOne({
            include: [{
                model: Meal,
                attributes: ['id', 'name', 'description', 'price', 'imgUrl'],
                as: 'meals',
                through: { attributes: [] },
            }],
            where: {
                created_at: {
                    [Op.gte]: format(currentDate),
                },
            },
        });

        if (!todayMenu) {
            error.message = 'Menu for the day has not been set!';
            return res.status(404).json({
                message: error.message,
                status: 'error',
                error,
            });
        }

        return res.status(200).json({
            message: 'Menu retrieved successfully!',
            status: 'success',
            menu: todayMenu,
        });

    }

    static async updateMenu(req, res) {
        const { mealIds } = req.body;
        const { menuId } = req.params;
        const error = {};

        const currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0);

        let matchedMenu;
        if (!menuId) {
            matchedMenu = await Menu.findOne({
                where: {
                    created_at: {
                        [Op.gte]: format(currentDate),
                    },
                },
            });
        } else {
            matchedMenu = await Menu.findById(menuId);
        }

        if (!matchedMenu) {
            error.message = 'Menu not found or have not been setup';
            return res.status(404).json({
                message: error.message,
                status: 'error',
                error,
            });
        }

        await matchedMenu.setMeals(mealIds);
        const returnedMenu = await Menus.findById(matchedMenu.id, {
            include: [{
                model: Meal,
                attributes: ['id', 'name', 'description', 'price', 'imgUrl'],
                as: 'meals',
                through: { attributes: [] },
            }],
        });
        return res.status(200).json({
            message: 'Successfully updated menu',
            status: 'success',
            menu: returnedMenu,
        });

    }

    static async deleteMenu(req, res) {
        const { menuId } = req.params;
        const error = {};

        const matchedMenu = await Menus.findById(menuId);

        if (!matchedMenu) {
            error.message = 'Menu does not exist!';
            return res.status(404).json({
                message: error.message,
                status: 'error',
                error,
            });
        }

        await matchedMenu.destroy();
        return res.status(200).json({
            message: 'Menu successfullt deleted!!',
            status: 'success'
        });
    }
}

export default MenuController;