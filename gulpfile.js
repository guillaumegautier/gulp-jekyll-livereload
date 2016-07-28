var gulp = require('gulp');
var cp = require('child_process');
var livereload = require('gulp-livereload');

// Build Jekyll
gulp.task('build-jekyll', function (gulpCallBack) {
	var jekyll = cp.spawn('jekyll', ['build', '--config', 'src/_config.yml'], {stdio: 'inherit'});
	jekyll.on('error', (error) => gutil.log(gutil.colors.red(error.message)))
	jekyll.on('exit', function(code) {
		livereload.reload();
		gulpCallBack(code === 0 ? null :'ERROR: Jekyll process exited with code: '+ code);
		});
	});

gulp.task('default', function() {
	livereload.listen();
	});
