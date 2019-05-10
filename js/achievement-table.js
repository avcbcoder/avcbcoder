(function () {
    var dataHiring = [
        {
            c: '<b>TCS Codevita</b> <br> Round 1 <br> Round 2',
            d: '<br>Aug 2018 <br>Dec 2018',
            r: '<br>45/43000 <br>36th Rank'
        },
        {
            c: '<b>Zomato Hackathon {Hackanoodle}</b> <br> Online contest',
            d: '<br>Dec 2018',
            r: '<br>37th Rank'
        },
        {
            c: '<b>Interviewbit Hiring Challenge</b> <br> Online contest',
            d: '<br>Dec 2018',
            r: '<br>24th Rank'
        },
    ]

    var dataOnline = [
        {
            c: '<b>Codechef</b> - April Long Challenge',
            d: 'Apr 2018',
            r: '155/7809'
        },
        {
            c: '<b>Codechef</b> - January Cook Off',
            d: 'Apr 2018',
            r: '123/1738'
        },
        {
            c: '<b>Codechef</b> - February Lunchtime',
            d: 'Feb 2018',
            r: '200/1922'
        },
        {
            c: '<b>Hackerrank</b> - Hourrank 29',
            d: 'Aug 2018',
            r: '141/1906'
        },
    ]

    var dataCollege = [
        {
            c: 'IOSD - Code-saga (Online coding contest)',
            d: 'Apr 2018',
            r: '1/67'
        },
        {
            c: 'MSIT Avensis - AlgoJam (Coding competition)',
            d: 'Jan 2018',
            r: '1/193'
        },
        {
            c: 'IEEE, MAIT - Codesense(Team Coding competition)',
            d: 'Feb 2018',
            r: '1/24'
        },
    ]

    var tbody = document.getElementById('achv01').getElementsByTagName('tbody')
    console.log(tbody)
    for (let i = 0; i < dataHiring.length; i++) {
        $(tbody).append(`
        <tr>
        <td data-column="First Name">${dataHiring[i].c}</td>
        <td data-column="Last Name">${dataHiring[i].r}</td>
        <td data-column="Job Title">${dataHiring[i].d}</td>
        </tr>
    `)
    }

    var tbody = document.getElementById('achv02').getElementsByTagName('tbody')
    console.log(tbody)
    for (let i = 0; i < dataOnline.length; i++) {
        $(tbody).append(`
        <tr>
        <td data-column="First Name">${dataOnline[i].c}</td>
        <td data-column="Last Name">${dataOnline[i].r}</td>
        <td data-column="Job Title">${dataOnline[i].d}</td>
        </tr>
    `)
    }

    tbody = document.getElementById('achv03').getElementsByTagName('tbody')
    console.log(tbody)
    for (let i = 0; i < dataCollege.length; i++) {
        $(tbody).append(`
        <tr>
        <td data-column="First Name">${dataCollege[i].c}</td>
        <td data-column="Last Name">${dataCollege[i].r}</td>
        <td data-column="Job Title">${dataCollege[i].d}</td>
        </tr>
    `)
    }

})()