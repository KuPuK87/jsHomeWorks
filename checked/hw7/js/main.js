let Lightbulb = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0.209; //+prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');

        if (confirm('Включить лампочку?')) {
            this.firstDate = prompt('В какое время включена лампочка, в формате 00:00');
            this.secondDate = prompt('В какое время выключена лампочка, в формате 00:00');
        } else {
            console.log('Лампочка "' + this.name + '" не включена');
            return
        };

        this.operation();
    };

    this.operation = function () {

        let getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
        let different = (getDate(this.secondDate) - getDate(this.firstDate));
        let differentRes,
            hours,
            minuts;
            
        if (different > 0) {
            differentRes = different;
            hours = Math.floor((differentRes % 86400000) / 3600000);
            minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
        } else {
            differentRes = Math.abs((getDate(this.firstDate) - getDate(this.secondDate)));
            hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
            minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
        }

        this.totalTime = hours + (minuts / 60)

        this.result = (this.power / 1000) * this.costEnergy * this.totalTime;

        this.show();
    };

    this.show = function () {

        if (this.result > 0) {
            console.log('Лампочка "' + this.name + '" проработала - ' + this.totalTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        } else {
            console.log('Лампочка "' + this.name + '" не включена');
        }
    };
};

let lightBulb = new Lightbulb('Кухня');
lightBulb.get();

let lightBulb2 = new Lightbulb('Коридор');
lightBulb2.get();