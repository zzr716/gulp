// 任务总管
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var processorsArray = [
    require('autoprefixer')(
        {
            browsers:['last 2 versions',
             'ie 6-8', 'Firefox > 20']
        }
    )
]
gulp.task('styles', function() {
    return gulp.src('./css/one.css')
        .pipe(postcss(processorsArray))
        .pipe(gulp.dest('./build/'))
});
// var stylus = require('gulp-stylus');
// gulp.task('copy-index', function () {
//     // 找到这个文件   // 送入管道之中
//     return gulp.src('./index.html').pipe(gulp.dest('./build/'))
// })
// gulp.task('one', function () {
//     // 找到这个文件   // 送入管道之中
//     return gulp.src('./css/one.styl').pipe(stylus({
//         // compress: true
//         linenos: true
//     })).pipe(gulp.dest('./css/build'))
// })
