function display(val)
{
    document.getElementById('final_output').value+=val;
}

function solve()
{
    var expr = document.getElementById('final_output').value;
    var soln = eval(expr); document.getElementById('final_output').value=soln;
}

function c()
{
    document.getElementById('final_output').value="";
}

function del()
{
    var txt = document.getElementById('final_output').value;
    txt = txt.slice(0,-1);
    document.getElementById("final_output").value=txt;
}

function percent()
{
    num = document.getElementById("final_output").value;
    num = eval(num/100);
    document.getElementById("final_output").value = num;
}