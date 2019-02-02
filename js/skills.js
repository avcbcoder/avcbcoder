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
        android: {

        },
        cp: {

        }
    }

    for (let i = 0; i < 5; i++)
        addProgressBar('#webDev', skillsData.web[i].k, skillsData.web[i].v)

    function addProgressBar(id, key, value) {
        $(id).append(`
        <div class="row animate-box" data-animate-effect="fadeInLeft">
        <div class="progress-wrap">
            <h3>${key}</h3>
            <div class="progress">
                <div class="progress-bar color-2" role="progressbar" aria-valuenow="${value}" aria-valuemin="0"
                    aria-valuemax="100" style="width:${value}%">
                    <span>${value}%</span>
                </div>
            </div>
        </div>
        </div>
        `);
    }

})();