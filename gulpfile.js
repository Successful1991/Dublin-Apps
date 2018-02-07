var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

//--server---------------------------------
gulp.task('server', function() {
	gulp.src('')
		.pipe(server({
			livereload: true,
			open: true
		}));
});
//--style-----------------------------------------
gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers:['last 7 versions']
		}))
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
	gulp.watch('app/sass/**/*.sass', ['sass']);
});


gulp.task('default', ['server','watch']);

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});