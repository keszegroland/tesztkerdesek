function pontok()
{
    //egyes
    var pont = 0;
    if(document.getElementById("tarsas").checked==true)
    {
        pont+=1;
    }
    if(document.getElementById("edesseg").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("tanc").checked==true)
    {
        pont+=0;
    }
    
   if(document.getElementById("gbmegold").checked==true)
    {
        pont+=1;
    }
   if(document.getElementById("lenard").checked==true)
    {
        pont+=0;
    }
   if(document.getElementById("wigner").checked==true)
    {
        pont+=0;
    }


    //kettes

    //harmas
    if(document.getElementById("megoldas").checked==true)
    {
        pont+=1;
    }
    if(document.getElementById("o").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("pt").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("cu").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("h").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("hg").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("h2o").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("n").checked==true)
    {
        pont+=0;
    }


    var mobil="mobiltelefon hiány"
    //negyes
    if(document.getElementById("answer") == "mobiltelefon hiány")
    {
        pont+=1;
    }

    //otos
    if(document.getElementById("ablak").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("erkely").checked==true)
    {
        pont+=0;
    }
    if(document.getElementById("padlo").checked==true)
    {
        pont+=1;
    }
    if(document.getElementById("szinpad").checked==true)
    {
        pont+=0;
    }

    alert("Ennyi pontod lett a kvízben: " + pont);
}