const gulp = require('gulp');
const {series, parallel} = require('gulp')

const tarefaAntes1 = cb => {
    console.log('Antes 1');
    return cb();
}

const tarefaAntes2 = cb => {
    console.log('Antes 2');
    return cb();
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const tarefaFim = cb => {
    console.log('Fim');
    return cb();
}

module.exports.default = series(parallel( tarefaAntes1, tarefaAntes2 ), copiar, tarefaFim,);