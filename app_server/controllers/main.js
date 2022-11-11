//НАСТРОЙКА КОНТРОЛЛЕРА ДОМАШНЕЙ СТРАНИЦЫ
module.exports.index=function(req,res,next) {  //метод для экспорта index
    res.render('index', { title: 'Express' }); //код контроллера
};
