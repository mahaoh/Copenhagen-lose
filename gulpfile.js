<<<<<<< HEAD
var gulp = require("gulp");
var less = require("gulp-less");
var bs = require("browser-sync").create();
var  autoprefixer = require('gulp-autoprefixer');

// gulp.task   定义任务
// gulp.src    获取文件流
// gulp.pipe   处理文件流
// gulp.dest   输出文件流
// gulp.watch  监听文件

gulp.task("refresh", function(){
  bs.reload();
});

gulp.task("watch", function(){
  gulp.watch("src/less/*.less", ["lessc"]);
  // gulp.watch("./html/APP.html", ["refresh"]);
  gulp.watch("./html/*.html", bs.reload);
});

gulp.task("lessc", function(){
  gulp.src("src/less/*.less")
      .pipe( less() )
	  .pipe(less()).pipe(autoprefixer({
=======
var gulp=require('gulp'),//本地安装gulp所用到的地方
	//less
	less=require('gulp-less'),
	//加前缀
	 autoprefixer = require('gulp-autoprefixer'),
	 //自动刷新
	  livereload = require('gulp-livereload');
	
	//定义一个testless编译任务，自定义任务名称
	gulp.task('testless',function(){
		gulp.src('src/less/*.less')//该任务针对的文件，多个任务用*号
		 
		 .pipe(less()).pipe(autoprefixer({
>>>>>>> cf65491edd6c5bf6919972045e7795286be67bd8
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove:true 
        }))
<<<<<<< HEAD
      .pipe( gulp.dest("src/css/") );
});

gulp.task("default", ["watch"], function(){
  bs.init({
    server: {
      baseDir: "./" //服务主目录
    },
    startPath: "src/html/*.html" //服务启动主文件
  });
});






=======
		.pipe(gulp.dest('src/css/'))
		.pipe(livereload());
	});
//定义监听任务
gulp.task('watch',function(){
	livereload.listen();
  gulp.watch("src/less/*.less",["testless"]);
})
>>>>>>> cf65491edd6c5bf6919972045e7795286be67bd8
