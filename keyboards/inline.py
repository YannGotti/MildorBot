from aiogram import types

adminKey = types.InlineKeyboardMarkup(row_width=2)
adminKey.add(
    types.InlineKeyboardButton("Начать игру", callback_data="startGame"),
    types.InlineKeyboardButton("Закончить игру", callback_data="stopGame")
)