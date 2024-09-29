
export default function NotFoundPage() {

   const rawHTML = `
   <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Not Found</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mono:wght@100..900&display=swap');
        
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
        }
        
        *::-moz-focus-inner {
            border: 0;
        }
        
        *:focus {
            outline: none;
        }
        
        html {
            background: #1A1A1A;
            font-family: "Montserrat", sans-serif;
            overflow: hidden;
            color: #1A1A1A;
        }
        
        html:after,
        html:before {
            content: '404';
            position: absolute;
            font-size: 100px;
            left: 0;
            right: 0;
            text-align: center;
            bottom: 340px;
            font-weight: 600;
            z-index: 200;
        }
        
        html:before {
            content: 'Page Not Found';
            font-size: 22px;
            font-weight: 400;
            bottom: 330px;
        }
        
        head {
            display: block;
            width: 35px;
            height: 140px;
            background: #646464;
            border-bottom: 10px solid #333;
            margin: auto;
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            -webkit-animation: 5s find linear infinite;
            animation: 5s find linear infinite;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
        }
        
        head:after {
            content: '';
            position: absolute;
            border-style: solid;
            border-width: 25px 25px 0 25px;
            border-color: #333 transparent transparent transparent;
            width: 85px;
            left: -25px;
            top: 0;
            box-shadow: 0 -10px 0 #FEAF33;
        }
        
        head:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 15px;
            background: #FEAF33;
            left: 0;
            right: 0;
            margin: auto;
            top: 40px;
            border-radius: 6px;
            box-shadow: 0 0 1px 2px #333;
        }
        
        meta {
            display: block;
            width: 250px;
            height: 200px;
            background: #FFFEE2;
            border-radius: 50%;
            position: absolute;
            left: -107px;
            bottom: 270px;
            margin: auto;
            text-align: center;
            color: #333;
            font-size: 90px;
            line-height: 200px;
            font-weight: 600;
        }
        
        meta:after {
            content: '';
            position: absolute;
            border-style: solid;
            border-width: 190px 75px 0 75px;
            border-color: rgba(255, 254, 226, 0.3) transparent transparent transparent;
            width: 230px;
            left: 10px;
            top: 100%;
            -webkit-transform: translateY(-60px);
            transform: translateY(-60px);
        }
        
        @-webkit-keyframes find {
            25% {
                -webkit-transform: rotate(25deg);
                transform: rotate(25deg);
            }
            
            0%,
            50%,
            100% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            
            75% {
                -webkit-transform: rotate(-25deg);
                transform: rotate(-25deg);
            }
        }
        
        @keyframes find {
            25% {
                -webkit-transform: rotate(25deg);
                transform: rotate(25deg);
            }
            
            0%,
            50%,
            100% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            
            75% {
                -webkit-transform: rotate(-25deg);
                transform: rotate(-25deg);
            }
        }
    </style>
</head>
<body>
</body>
</html>`;
      

   return (
      <div>
         <h2>Not Found Page</h2>
      </div>

   );
}