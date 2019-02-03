(function () {
    var skillsData = {
        web: [
            {
                k: 'Node js',
                v: '70'
            },
            {
                k: 'Javascript',
                v: '80'
            },
            {
                k: 'HTML5/CSS3',
                v: '90'
            },
            {
                k: 'Bootstrap',
                v: '90'
            },
            {
                k: 'jQuery',
                v: '80'
            }
        ],
        android: [
            {
                k: 'Kotlin',
                v: '70'
            },
            {
                k: 'XML',
                v: '80'
            },
            {
                k: 'Firebase',
                v: '70'
            },
            {
                k: 'SQLite',
                v: '80'
            }
        ],
        cp: [
            {
                k: 'Java',
                v: '95'
            },
            {
                k: 'C/C++',
                v: '70'
            }
        ]
    }

    for (let i = 0; i < 5; i++)
        addProgressBar('#web', skillsData.web[i].k, skillsData.web[i].v)

    for (let i = 0; i < 2; i++)
        addProgressBar('#cp', skillsData.cp[i].k, skillsData.cp[i].v)

    for (let i = 0; i < 4; i++)
        addProgressBar('#android', skillsData.android[i].k, skillsData.android[i].v)

    // function to add a progress bar of random color with given name(key) and %(value) to the given id 
    function addProgressBar(id, key, value) {
        $(id).append(`
        <div class="row animate-box" data-animate-effect="fadeInLeft">
        <div class="progress-wrap">
            <h3>${key}</h3>
            <div class="progress">
                <div class="progress-bar color-${Math.floor((Math.random() * 6) + 1)}" role="progressbar" aria-valuenow="${value}" aria-valuemin="0"
                    aria-valuemax="100" style="width:${value}%">
                    <span>${value}%</span>
                </div>
            </div>
        </div>
        </div>
        `);
    }

})();