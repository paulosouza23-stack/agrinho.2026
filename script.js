*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --fonte:16px;
}

body{
    background:#000;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-size:var(--fonte);
    line-height:1.6;
}

header{
    background:#001f3f;
    text-align:center;
    padding:20px;
}

header h1{
    color:#00bfff;
}

nav ul{
    list-style:none;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
    margin-top:15px;
}

nav a{
    text-decoration:none;
    color:#00ff88;
    font-weight:bold;
}

nav a:hover{
    color:white;
}

section{
    max-width:1000px;
    margin:auto;
    padding:40px 20px;
}

h2{
    color:#00bfff;
    margin-bottom:15px;
}

img{
    width:100%;
    border-radius:10px;
    margin:20px 0;
}

table{
    width:100%;
    border-collapse:collapse;
    margin-top:20px;
}

table, th, td{
    border:1px solid white;
}

th{
    background:#00bfff;
    color:black;
}

th, td{
    padding:10px;
}

ul{
    margin-left:20px;
}

.grafico{
    display:flex;
    align-items:flex-end;
    gap:20px;
    margin-top:30px;
    height:250px;
}

.barra{
    width:100px;
    display:flex;
    justify-content:center;
    align-items:flex-end;
    color:white;
    font-weight:bold;
    padding-bottom:10px;
}

.barra1{
    height:200px;
    background:#00ff88;
}

.barra2{
    height:150px;
    background:#00bfff;
}

.barra3{
    height:100px;
    background:#0066ff;
}

.legenda{
    margin-top:15px;
}

form{
    display:flex;
    flex-direction:column;
    gap:10px;
    margin-top:20px;
}

input{
    padding:10px;
}

button{
    padding:12px;
    border:none;
    cursor:pointer;
    background:#00bfff;
    color:black;
    font-weight:bold;
}

button:hover{
    background:#00ff88;
}

#resultado{
    margin-top:20px;
    font-size:1.1rem;
    font-weight:bold;
}

.video-container{
    position:relative;
    padding-bottom:56.25%;
    height:0;
    overflow:hidden;
}

.video-container iframe{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}

footer{
    background:#001f3f;
    text-align:center;
    padding:20px;
}

.painel-acessibilidade{
    position:fixed;
    right:15px;
    top:15px;
    display:flex;
    flex-direction:column;
    gap:5px;
    z-index:1000;
}

.alto-contraste{
    background:white;
    color:black;
}

.alto-contraste h2{
    color:black;
}

@media(max-width:768px){

    nav ul{
        flex-direction:column;
    }

    .grafico{
        gap:10px;
    }

    .barra{
        width:70px;
    }
}
