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
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove:true 
        }))
		.pipe(gulp.dest('src/css/'))
		.pipe(livereload());
	});
//定义监听任务
gulp.task('watch',function(){
	livereload.listen();
  gulp.watch("src/less/*.less",["testless"]);
})