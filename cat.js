module.exports = function(){
    const fs = require('fs');
    process.stdin.on('data', (data, filename) => {
        if(data.toString().trim()=== 'cat'){
            fs.readFile(filename, (err, data)=>{
                if (err) throw err;
                else {
                    process.stdout.write(data('\n'))
                    console.log(data);
                    process.stdout.write('\nprompt > ')
                }
            });
        }
    });

//     readFile('/etc/passwd', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//       });
}