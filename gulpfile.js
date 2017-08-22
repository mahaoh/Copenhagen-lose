var gulp = require("gulp");
var less = require("gulp-less");
var bs = require("browser-sync").create();
var autoprefixer = require('gulp-autoprefixer');

//自动化构建工具grunt，gulp，webpack
//基于这些工具之上又有各种各样的功能插件
//css预处理编译
//css自动加前缀
//合并文件
//压缩文件
//加密文件
//图片处理（压缩，合并）
//...

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
  // gulp.watch("./html/*.html", ["refresh"]);
  gulp.watch("src/html/*.html", bs.reload);
});

gulp.task("lessc", function(){
  gulp.src("src/less/*.less")

        .pipe(less()).pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove:true
        }))

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
