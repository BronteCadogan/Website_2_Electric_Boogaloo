
function Halloween ()
{

    let date = new Date();
    let month = date.getMonth();

    //october is the 10th month, numbers start at 0 sub 1.
    if(month === 9)
    {
        document.getElementById("homepage").style.filter="hue-rotate(180deg)";

        //need tweaking to get my face back to the saturation it is by default
        document.getElementById("profile").style.filter="hue-rotate(180deg)";

        document.getElementById("exp").style.background="linear-gradient(90deg, #ff00d1, rgb(16 36 208) )";

        document.getElementById("pr").style.background="linear-gradient(90deg, #ff00d1, rgb(16 36 208) )";
    }
    
}
    

document.addEventListener("DOMContentLoaded", Halloween);


export default Halloween;