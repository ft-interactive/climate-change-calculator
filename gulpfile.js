var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var mincss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var prefix = require('gulp-prefix');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var git = require('gulp-git');


gulp.task('dist:test', function() {
	return gulp.src(['./*.{png,js,css,svg,csv,html}', '!gulpfile.js']).
		pipe(gulp.dest('../interact/climate-change-calculator'));
});

gulp.task('status', function() {
	git.status(function(err, stdout) {
		if (err) throw err;
	});
});

gulp.task('add', function() {
	return gulp.src('./*')
		.pipe(git.add());
});

gulp.task('commit', function() {
	return gulp.src('./*')
		.pipe(git.commit('dist commit'));
});

gulp.task('push', function() {
	git.push('origin', 'chinese', function(err) {
		if (err) {
			console.log('`git push` encountered an error, please run `git push` manually.')
			throw err;
		}
		console.log('Changes pushed to GitHub repository `chinese` branch!');
	});
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

gulp.task('copy', function() {
	return gulp.src(['./*.{png,js,css,svg,csv}', '!gulpfile.js'])
		.pipe(
			gulpif('flatpack.js', 
				replace('new.csv', 'http://www.ftchinese.com/m/marketing/climate.csv.html'
			))
		)
		.pipe(gulp.dest('../ft-interact/climate-change-calculator/'));
});

gulp.task('dist',['html', 'copy']);