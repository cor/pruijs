'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['scss', 'scss_watch', 'start_server']);

var paths = {
	styles : {
		src: 'scss/**/*.scss',
		dest: 'css/'
	}
};

gulp.task('scss', function() {
	gulp.src(paths.styles.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.styles.dest))
});

gulp.task('scss_watch', function() {
	gulp.watch(paths.styles.src, ['scss']);
});

gulp.task('start_server', shell.task(['python3 -m http.server 5000']));
