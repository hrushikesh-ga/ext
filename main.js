var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// Format the time
var formattedTime = hours + ":" + minutes + ":" + seconds;

// Add greeting based on time
var greeting = "";
if (hours < 12) {
    greeting = "Salut, Bonjour! Good Morning!";
} else if (hours >= 12 && hours < 18) {
    greeting = "Salut, Bon après-midi! Good Afternoon!";
} else {
    greeting = "Salut, Bonne soirée! Good Evening!";
}



Swal.fire(greeting);




function redirectToUrl() {
  const txtval = document.getElementById("inputmail").value;


  if (!txtval) {
    Swal.fire({
      icon: 'error',
      title: 'Por Favor! Enter Valid Value',
    })
  }else{

   const url = "https://www.google.com/search?q=site%3Alinkedin.com%2Fin+%22"+txtval+"%22"
   const win = window.open(url, "_blank");
   win.focus();

   document.getElementById('inputmail').value = "";
 }
}




function redirectToW() {
  const wval = document.getElementById("winput").value;


  if (!wval) {
    Swal.fire({
      icon: 'error',
      title: 'Por Favor! Enter Valid Value',
    })
  }else{

   const url = "https://web.archive.org/web/20230000000000*/"+wval;
   const win = window.open(url, "_blank");
   win.focus();

   document.getElementById('winput').value = "";
 }
}


function redirectToSite() {
  const siteval = document.getElementById("inputsite").value;
  const qval = document.getElementById("inputq").value;

  if (!siteval) {
   Swal.fire({
    icon: 'error',
    title: 'Por Favor! Enter Valid Value',
  })
 }else{

  const url = "https://www.google.com/search?q=site%3A"+siteval+"+"+qval;
  const win = window.open(url, "_blank");
  win.focus();


}
}

function redirectTodom2() {
  const siteval2 = document.getElementById("inputsite2").value;
  const qval2 = document.getElementById("inputq2").value;
  var fileType = document.getElementById("fileType").value;

  if (!siteval2) {
    Swal.fire({
      icon: 'error',
      title: 'Por Favor! Enter Valid Value',
    })
  }else{

    const url = "https://www.google.com/search?q=site%3A"+siteval2+"+%22"+qval2+"%22+filetype%3A"+fileType;
    const win = window.open(url, "_blank");
    win.focus();

    document.getElementById('inputsite2').value = "";
    document.getElementById('inputq2').value = "";
    document.getElementById('fileType').value = "";
  }
}

function redirectTodom() {

  var domval = document.getElementById("domInput").value;


  if (!domval) {
   Swal.fire({
    icon: 'error',
    title: 'Por Favor! Enter Valid Value',
  })
 }else{



  var ran = Array(3,4,5,6,7,8,9,10,11,12,13,14,15,16,17);
  var apin = ran[Math.floor(Math.random()*ran.length)];

  // var apin = 17;
  
  console.log(apin);

  switch (apin) {
    case 1:

    const settings1 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '874cf91f48msh72d3cf537e719b4p1ce71djsn2f0d442fc3ac',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings1).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];
 const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;s
  // console.log(size);
});

    break;
    case 2:


    const settings2 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '33e02b6158msh23379a74947f61cp112b19jsn782ac7f10bce',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings2).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

    const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
        // var size = Object.keys(response.data[0]).length;
  // console.log(size);  
});


    break;
    case 3:



    const settings3 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1c52a74fb6msh6b787455afdd18bp1e904djsnde6fe16de392',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings3).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

  const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});

    break;
    case 4:



    const settings4 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b2510ff323msh95daeb5bb0faac8p17de26jsn935cd1828f1b',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings4).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

    const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});

    break;
    case 5:


    const settings5 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ba0b9dec95mshcc44abe8251cb63p14520fjsn250d0361cf33',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings5).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

  const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 6:



    const settings6 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af838597femsh503af2968863f15p1f04f9jsna0e0a3c561ab',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings6).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

 const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});

    break;
    case 7:


    const settings7 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c901e8e98cmsh29d9734e80dc46fp1c6d69jsn4cb03481de5c',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings7).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

 const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 8:


    const settings8 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3502885a12msh230596063046857p148af5jsnf0a3198698db',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings8).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

      const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 9:


    const settings9 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2ac5e4385emsh22d380a3f91d7cfp14e09ajsn2bc700bb43cc',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings9).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

  const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 10:


    const settings10 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4f1b64f9e4msh2d14770bb0fbc96p1ea1acjsn3ccb6dc146db',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings10).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;
     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

   const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 11:


    const settings11 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b74737a1cbmsh9244beb6ee04fa9p1ac93ajsn1794789077c3',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings11).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;

     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

    const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 12:


    const settings12 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '887b158db1msh19b128bc32df8cdp11f124jsn803f0ca3acf4',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings12).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;
     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];

     const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 13:




    const settings13 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cb90bf580amsh8398ca9780795d9p142a7bjsnfe0d3bcb3696',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings13).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

     const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});
    break;
    case 14:

    const settings14 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b226e759c2msh93db44c803f4d9bp1945d0jsn81117fae8d65',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings14).done(function (response) {
     console.log(response.data[0]);
     let jdata = response.data[0];
     let edata = response.data[0].emails;
     let pdata = response.data[0].phone_numbers;
     let facebook = response.data[0].facebook;
     let instagram = response.data[0].instagram;
     let linkedin = response.data[0].linkedin;
     let twitter = response.data[0].twitter;

     
     var sm = [facebook,instagram,linkedin,twitter];

     var size = Object.keys(jdata).length;
     var esize = Object.keys(edata).length;
     var psize = Object.keys(pdata).length;

     var em = [];
     for (var i = 0; i < esize; i++) {
      em.push(edata[i].value)
    };

    var ph = [];

    for (var g = 0; g < psize; g++) {
      ph.push(pdata[g].value);
    }
    var e1 = ["Emails:"];
    var n1 = [" ","---","Phone Numbers:"];
    var sm1 = [" ","---","Social Media:"];
 const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);

    
    let dataText = '';

    for (let i = 0; i < combinedArray.length; i++) {
      dataText += combinedArray[i] + '\n';
    }


    let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});



    break;
    case 15:


    const settings15 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5088c1d3a4msh5c8ac9ec4f82ea9p15d87djsn9099e8e0abf2',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings15).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

  const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 16:


    const settings16 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '273c2d9556msh065702821e92100p120e4cjsn1f038d2ec21e',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings16).done(function (response) {
      console.log(response.data[0]);
      let jdata = response.data[0];
      let edata = response.data[0].emails;
      let pdata = response.data[0].phone_numbers;

      let facebook = response.data[0].facebook;
      let instagram = response.data[0].instagram;
      let linkedin = response.data[0].linkedin;
      let twitter = response.data[0].twitter;

      
      var sm = [facebook,instagram,linkedin,twitter];

      var size = Object.keys(jdata).length;
      var esize = Object.keys(edata).length;
      var psize = Object.keys(pdata).length;

      var em = [];
      for (var i = 0; i < esize; i++) {
        em.push(edata[i].value)
      };

      var ph = [];

      for (var g = 0; g < psize; g++) {
        ph.push(pdata[g].value);
      }
      var e1 = ["Emails:"];
      var n1 = [" ","---","Phone Numbers:"];
      var sm1 = [" ","---","Social Media:"];

 const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


      
      let dataText = '';

      for (let i = 0; i < combinedArray.length; i++) {
        dataText += combinedArray[i] + '\n';
      }


      let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;
    case 17:


    const settings17 = {
      async: true,
      crossDomain: true,
      url: 'https://website-contacts-scraper.p.rapidapi.com/scrape-contacts?query='+domval,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '378dcbecaamsh1b8545f7656cb69p1ad8c4jsnbad3c24d50d6',
        'X-RapidAPI-Host': 'website-contacts-scraper.p.rapidapi.com'
      }
    };

    $.ajax(settings17).done(function (response) {

      console.log(response.data[0]);
            let jdata = response.data[0];
            let edata = response.data[0].emails;
            let pdata = response.data[0].phone_numbers;

            let facebook = response.data[0].facebook;
            let instagram = response.data[0].instagram;
            let linkedin = response.data[0].linkedin;
            let twitter = response.data[0].twitter;


            var sm = [facebook,instagram,linkedin,twitter];

            var size = Object.keys(jdata).length;
            var esize = Object.keys(edata).length;
            var psize = Object.keys(pdata).length;

            var em = [];
            for (var i = 0; i < esize; i++) {
              em.push(edata[i].value)
            };

            var ph = [];

            for (var g = 0; g < psize; g++) {
              ph.push(pdata[g].value);
            }
            var e1 = ["Emails:"];
            var n1 = [" ","---","Phone Numbers:"];
            var sm1 = [" ","---","Social Media:"];


            const emf = em.filter(value => !value.includes("john"));
            const phf = ph.filter(number => /^\d{10}$/.test(number.toString()));

            let combinedArray = e1.concat(emf, n1, phf, sm1, sm);


            let dataText = '';

            for (let i = 0; i < combinedArray.length; i++) {
              dataText += combinedArray[i] + '\n';
            }


            let data = new Blob([dataText], { type: 'text/plain' });

            // Generate a URL for the Blob
            let url = URL.createObjectURL(data);

            // Open the URL in a new tab
            window.open(url, '_blank');
    





  // var size = Object.keys(response.data[0]).length;
  // console.log(size);
});


    break;


  }


}}





const countryTLDs = {
  "Afghanistan": ".af",
  "Albania": ".al",
  "Algeria": ".dz",
  "Andorra": ".ad",
  "Angola": ".ao",
  "Antigua and Barbuda": ".ag",
  "Argentina": ".ar",
  "Armenia": ".am",
  "Australia": ".au",
  "Austria": ".at",
  "Azerbaijan": ".az",
  "Bahamas": ".bs",
  "Bahrain": ".bh",
  "Bangladesh": ".bd",
  "Barbados": ".bb",
  "Belarus": ".by",
  "Belgium": ".be",
  "Belize": ".bz",
  "Benin": ".bj",
  "Bhutan": ".bt",
  "Bolivia": ".bo",
  "Bosnia and Herzegovina": ".ba",
  "Botswana": ".bw",
  "Brazil": ".br",
  "Brunei": ".bn",
  "Bulgaria": ".bg",
  "Burkina Faso": ".bf",
  "Burundi": ".bi",
  "Cabo Verde": ".cv",
  "Cambodia": ".kh",
  "Cameroon": ".cm",
  "Canada": ".ca",
  "Central African Republic": ".cf",
  "Chad": ".td",
  "Chile": ".cl",
  "China": ".cn",
  "Colombia": ".co",
  "Comoros": ".km",
  "Congo, Democratic Republic of the": ".cd",
  "Congo, Republic of the": ".cg",
  "Costa Rica": ".cr",
  "Cote d'Ivoire": ".ci",
  "Croatia": ".hr",
  "Cuba": ".cu",
  "Cyprus": ".cy",
  "Czech Republic": ".cz",
  "Denmark": ".dk",
  "Djibouti": ".dj",
  "Dominica": ".dm",
  "Dominican Republic": ".do",
  "Ecuador": ".ec",
  "Egypt": ".eg",
  "El Salvador": ".sv",
  "Equatorial Guinea": ".gq",
  "Eritrea": ".er",
  "Estonia": ".ee",
  "Eswatini": ".sz",
  "Ethiopia": ".et",
  "Fiji": ".fj",
  "Finland": ".fi",
  "France": ".fr",
  "Gabon": ".ga",
  "Gambia": ".gm",
  "Georgia": ".ge",
  "Germany": ".de",
  "Ghana": ".gh",
  "Greece": ".gr",
  "Grenada": ".gd",
  "Guatemala": ".gt",
  "Guinea": ".gn",
  "Guinea-Bissau": ".gw",
  "Guyana": ".gy",
  "Haiti": ".ht",
  "Honduras": ".hn",
  "Hungary": ".hu",
  "Iceland": ".is",
  "India": ".in",
  "Indonesia": ".id",
  "Iran": ".ir",
  "Iraq": ".iq",
  "Ireland": ".ie",
  "Israel": ".il",
  "Italy": ".it",
  "Jamaica": ".jm",
  "Japan": ".jp",
  "Jordan": ".jo",
  "Kazakhstan": ".kz",
  "Kenya": ".ke",
  "Kiribati": ".ki",
  "Korea, Democratic People's Republic of": ".kp",
  "Korea, Republic of": ".kr",
  "Kosovo": ".xk",
  "Kuwait": ".kw",
  "Kyrgyzstan": ".kg",
  "Laos": ".la",
  "Latvia": ".lv",
  "Lebanon": ".lb",
  "Lesotho": ".ls",
  "Liberia": ".lr",
  "Libya": ".ly",
  "Liechtenstein": ".li",
  "Lithuania": ".lt",
  "Luxembourg": ".lu",
  "Madagascar": ".mg",
  "Malawi": ".mw",
  "Malaysia": ".my",
  "Maldives": ".mv",
  "Mali": ".ml",
  "Malta": ".mt",
  "Marshall Islands": ".mh",
  "Mauritania": ".mr",
  "Mauritius": ".mu",
  "Mexico": ".mx",
  "Micronesia, Federated States of": ".fm",
  "Moldova": ".md",
  "Monaco": ".mc",
  "Mongolia": ".mn",
  "Montenegro": ".me",
  "Morocco": ".ma",
  "Mozambique": ".mz",
  "Myanmar": ".mm",
  "Namibia": ".na",
  "Nauru": ".nr",
  "Nepal": ".np",
  "Netherlands": ".nl",
  "New Zealand": ".nz",
  "Nicaragua": ".ni",
  "Niger": ".ne",
  "Nigeria": ".ng",
  "North Macedonia": ".mk",
  "Norway": ".no",
  "Oman": ".om",
  "Pakistan": ".pk",
  "Palau": ".pw",
  "Panama": ".pa",
  "Papua New Guinea": ".pg",
  "Paraguay": ".py",
  "Peru": ".pe",
  "Philippines": ".ph",
  "Poland": ".pl",
  "Portugal": ".pt",
  "Qatar": ".qa",
  "Romania": ".ro",
  "Russia": ".ru",
  "Rwanda": ".rw",
  "Saint Kitts and Nevis": ".kn",
  "Saint Lucia": ".lc",
  "Saint Vincent and the Grenadines": ".vc",
  "Samoa": ".ws",
  "San Marino": ".sm",
  "Sao Tome and Principe": ".st",
  "Saudi Arabia": ".sa",
  "Senegal": ".sn",
  "Serbia": ".rs",
  "Seychelles": ".sc",
  "Sierra Leone": ".sl",
  "Singapore": ".sg",
  "Slovakia": ".sk",
  "Slovenia": ".si",
  "Solomon Islands": ".sb",
  "Somalia": ".so",
  "South Africa": ".za",
  "South Sudan": ".ss",
  "Spain": ".es",
  "Sri Lanka": ".lk",
  "Sudan": ".sd",
  "Suriname": ".sr",
  "Sweden": ".se",
  "Switzerland": ".ch",
  "Sweden": ".se",
  "Switzerland": ".ch",
  "Syrian Arab Republic": ".sy",
  "Taiwan, Province of China": ".tw",
  "Tajikistan": ".tj",
  "Tanzania": ".tz",
  "Thailand": ".th",
  "Timor-Leste": ".tl",
  "Togo": ".tg",
  "Tonga": ".to",
  "Trinidad and Tobago": ".tt",
  "Tunisia": ".tn",
  "Turkey": ".tr",
  "Turkmenistan": ".tm",
  "Tuvalu": ".tv",
  "Uganda": ".ug",
  "Ukraine": ".ua",
  "United Arab Emirates": ".ae",
  "United Kingdom of Great Britain and Northern Ireland": ".uk",
  "United States of America": ".us",
  "Uruguay": ".uy",
  "Uzbekistan": ".uz",
  "Vanuatu": ".vu",
  "Venezuela": ".ve",
  "Viet Nam": ".vn",
  "Yemen": ".ye",
  "Zambia": ".zm",
  "Zimbabwe": ".zw",
};

function alertDomainName() {

  var wname = document.getElementById('qInput').value;
  var select = document.getElementById("mySelect");
  var selectedOption = select.options[select.selectedIndex];
  var name = selectedOption.value;

  const tld = countryTLDs[name];

  var url = "https://www.google.com/search?q=site%3A"+tld+"+%22"+wname+"%22"
  if (tld) {

    const win = window.open(url, "_blank");
    win.focus();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Por Favor! Enter Valid Value',
    })
  }
}
