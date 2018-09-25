const express=require('express')
const fs=require('fs')
const path=require('path')
const hbs=require('hbs')
// const port=process.env.PORT|| 3000;
var app=express()
app.set('view engine','hbs')
app.set(express.static(__dirname+'/'))
hbs.registerPartials(path.join(__dirname,'/partials'))
hbs.registerHelper('getPath',()=>{return __dirname})
hbs.registerHelper('date',()=>{return 207})
app.use((req,res,next)=>{
    var now=new Date().toString();
    console.log(`${now} ${req.method} ${req.url}`)
    fs.writeFile('./store.txt',now+" "+ 'request method is '+req.method+' and url is '+ req.url)
    next();
})

// app.use((req,res,next)=>{
//     res.render(path.join(__dirname,'/basics.hbs'));
    
// })

app.get('/about',(req,res)=>{
    // res.send({
    //     name:'bhavuk',
    //     age:23
    // })

    res.render(path.join(__dirname,'/rendering.hbs'),{
        num:2000
    });


    })
    app.get('/',(req,res)=>{
        res.render(path.join(__dirname,'/achievement.hbs'),{
            name:'BHAVUK GARG',
            age:18,
            year:new Date().getDate()
        })
        
        // console.log(req.url);
    
        })

app.listen(3000,()=>{
    console.log('server is ready on port 3000');
});