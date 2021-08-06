
module.exports = function(){
  process.stdout.write('prompt > ')
  process.stdin.on('data', (data) => {
    const expr = data.toString().trim();
    switch (expr) {
        case 'pwd':
            process.stdout.write(process.cwd());
            break;

        case 'hello world':
            console.log('error');
            break;
    }
    process.stdout.write('\nprompt > ')
  })
}
