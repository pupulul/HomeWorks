var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var concat = require('gulp-concat-dir');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var minifyHTML = require('gulp-minify-html');
var replace = require('gulp-replace');


//默认任务
gulp.task('default', ['minify','spritesmith' ,'cssrev','uglify','tr_Js','revjs','rev'], function() {
    // place code for your default task here
    console.log('hello gulp');
});






gulp.task('imagemin', function() {
    return gulp.src(['img/*.{png,jpg,gif,ico}', 'img/box/*.{png,jpg,gif,icon}'])
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('build/img/'))
        .pipe(rev.manifest('img.json'))
        .pipe(gulp.dest('./rev'));
})


//压缩css
gulp.task('minify', function() {
    return gulp.src('./css/*.css')
        .pipe(minify())
        .pipe(rev())
        .pipe(gulp.dest('build/css/'))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest('./rev'));
});

gulp.task('cssrev', function() {
    return gulp.src(['./rev/*.json', 'build/css/*.css'])
        .pipe(revCollector())
        .pipe(gulp.dest('build/css/'));
});

//压缩js
gulp.task('uglify', function() {
    return gulp.src(['js/*/*.js','js/*.js'])
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('build/js/'))
        .pipe(rev.manifest('js.json'))
        .pipe(gulp.dest('./rev'));
});





gulp.task('tr_Js', function(){
  gulp.src(['./rev/*.json'])
    .pipe(replace(/\.js/g, ''))
    .pipe(gulp.dest('./rev2/'));
});

gulp.task('revjs', function() {
    return gulp.src(['./rev2/*.json', 'js/*.js'])
        .pipe(revCollector(
                {replaceReved: true}
            ))
        .pipe(gulp.dest('build/js/'));
});

//Worked
gulp.task('rev', function() {
    return gulp.src(['./rev/*.json', '*.html'])
        .pipe(revCollector(
                {replaceReved: true,
                        dirReplacements: {
                            'css/': 'css/',
                            'js/': 'js/',
                            'img/':'img/'}}
            ))
        .pipe(gulp.dest('build/'));
})










//转less，没用到
gulp.task('less', function() {
    return gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest('build/css/'));
});

//转雪碧图
gulp.task('spritesmith', function() {
    return gulp
        .src(['img/*.{png,jpg,gif,ico}', 'img/box/*.{png,jpg,gif,icon}'])
        .pipe(spritesmith({
            imgName: 'sprite.png', //保存合并后图片的地址
            cssName: '../../rev/sprite.json', //保存合并后对于css样式的地址
            padding: 5, //合并时两个图片的间距
            algorithm: 'binary-tree', //注释1
            cssTemplate: function(data) {
                    var arr = [];
                    data.sprites.forEach(function(sprite) {
                        arr.push(".icon-" + sprite.name +
                            "{" +
                            "background-image: url(‘" + sprite.escaped_image + "‘);" +
                            "background-position: " + sprite.px.offset_x + "px " + sprite.px.offset_y + "px;" +
                            "width:" + sprite.px.width + ";" +
                            "height:" + sprite.px.height + ";" +
                            "}\n");
                    });
                    return arr.join("");
                } //注释2
        }))
        .pipe(gulp.dest('build/img/'))
});
