var gulp = require("gulp");
var uglify = require("gulp-uglify");//压缩文件
var babel = require("gulp-babel");//编译ES6;
var connect = require("gulp-connect");//热部署，及时刷新
var sass = require("gulp-ruby-sass");

/*//压缩  并重新编译；
gulp.task("common",function(){
	gulp.src("./js/common.js").pipe(uglify()).pipe(gulp.dest("./common.js"))
});*/

//编译ES6;
gulp.task("js",function(){
	gulp.src("./js/*.js")
		.pipe(babel({
			presets:["es2015"]
		})).pipe(uglify()).pipe( gulp.dest("./minjs/"))
});



//刷新浏览器
//定义一个任务 处理html
gulp.task("refreshHTML",function(){
	gulp.src("./*.html").pipe(connect.reload());
});
gulp.task("refreshcbkHTML",function(){
	gulp.src("./html/*.html").pipe(connect.reload());
	
});


//添加监听事件  实时编译；
gulp.task("compilesass",function(){
	sass("scss/*.scss",{
		style:"expanded"
	}).pipe( gulp.dest("css/"))
});


gulp.task("listening",function(){
	connect.server({
          livereload:true
     });
	gulp.watch("./scss/*.scss",["compilesass"]);
	gulp.watch("./js/*.js",["js"]);
	gulp.watch("./*.html",["refreshHTML"]);
	gulp.watch("./html/*.html",["refreshcbkHTML"]);
	
	
})




/*
 * 重命名
 *gulp.task("js",function(){
     gulp.src("js/*.js").pipe(uglify()).pipe(rename({suffix:".min"}).pipe(gulp.dest("js/min"));
});
*/