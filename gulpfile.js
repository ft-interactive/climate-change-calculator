var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var mincss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
	return gulp.src(['./*', '!./*.html'])
		.pipe(gulp.dest('assets'));
});