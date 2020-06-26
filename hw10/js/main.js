// Это объект из седьмого задания

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
            return;
        }

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

        this.totalTime = hours + (minuts / 60);

        this.result = (this.power / 1000) * this.costEnergy * this.totalTime;

        this.show();
    };

    this.show = function () {

        if (this.result > 0) {
            console.log(this.name + ' проработал - ' + this.totalTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        } else {
            console.log(this.name + ' не включен');
        }
    };
};

let lightBulb = new Lightbulb('Светильник - Кухня');

// lightBulb.get();

// Задание: Используя полученные знания, создайте новый объект, который будет наследовать
// свойства и методы объекта, созданного из предыдущего домашнего задания. Выполните
// прототипное и функциональное наследование на выбор. Модифицируйте (доработайте) любой
// из методов родителя в его потомке.


let Conditioning = function (power, status) {
    Lightbulb.apply(this, arguments);

    this.name = 'Кондиционер';
    this.power = power || 1000;
    this.costEnergy = 0.209;

    this.get = function () {

        if (status == true) {
            this.firstDate = prompt('В какое время включен кондиционер, в формате 00:00');
            this.secondDate = prompt('В какое время выключен кондиционер, в формате 00:00');
        } else {
            console.log('Кондиционер не включен');
            return;
        }

        let RegExp = /\d{2}:\d{2}/;

        if (!(RegExp.test(this.firstDate)) || !(RegExp.test(this.secondDate))) {
            console.log('Кондиционер не включен');
            return;
        }

        this.mode();
    };

    this.mode = function () {

        this.selectMode = +prompt('Введите режим работы - 1, 2, 3, 4, 5');

        switch (this.selectMode) {
            case 1:
                this.powerMode = 0.2;
                break;
            case 2:
                this.powerMode = 0.4;
                break;
            case 3:
                this.powerMode = 0.6;
                break;
            case 4:
                this.powerMode = 0.8;
                break;
            case 5:
                this.powerMode = 1;
                break;
            default:
                alert('Такого режима не существует, кондиционер включен на минимальный режим');
                this.powerMode = 0.2;
        }

        this.totalPower();
    };

    this.totalPower = function () {

        if (confirm('Включить кондиционер на обогрев?')) {
            this.power = this.power * this.powerMode;
            console.log('Кондиционер включен на обогрев');
        } else {
            this.power = 0.7 * this.power * this.powerMode;
            console.log('Кондиционер включен на охлаждение');
        }

        this.operation();
    };
};


let conditioning = new Conditioning(prompt('Введите мощность кондиционера?'), confirm('Включить кондиционер?'));

conditioning.get();