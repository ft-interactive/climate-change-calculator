var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var mincss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var prefix = require('gulp-prefix');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var imagemin = require('gulp-imagemin');

gulp.task('dist:test', function() {
	return gulp.src(['./*.{png,js,css,svg,csv,html}', '!gulpfile.js']).
		pipe(gulp.dest('../interact/climate-change-calculator'));
});

gulp.task('html', function() {
	var prefixUrl = 'http://interactive.ftchinese.com/climate-change-calculator';

	return gulp.src('index.html')
		.pipe(prefix(prefixUrl))
		.pipe(rename('climate2015.html'))
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
		}))
		.pipe(gulp.dest('../deploy/dev_www/frontend/tpl/special/'));
});

gulp.task('images', function() {
	return gulp.src('./*.{png,jpg}')
		.pipe(imagemin())
		.pipe(gulp.dest('./'));
});

gulp.task('copy', ['images'] function() {
	return gulp.src(['./*.{png,js,css,svg,jpg}', '!gulpfile.js'])
		.pipe(
			gulpif('flatpack.js', 
				replace('new.csv', 'http://www.ftchinese.com/m/marketing/climate.csv.html'
			))
		)
		.pipe(gulp.dest('../ft-interact/climate-change-calculator/'));
});

gulp.task('dist',['html', 'copy']);