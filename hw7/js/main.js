let Lightbulb = function (name) {

    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0.209; //+prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };

        this.operation();
    };

    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;

        this.show();
    };

    this.show = function () {

        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка "' + this.name + '" не включена');
        } else {
            console.log(`Лампочка "${this.name}" проработала ${this.workTime} ч. и стоимость потраченной электроэнергии составляет = ${this.result} p.`)
        }
    };
};

let lightBulb = new Lightbulb('Кухня');
lightBulb.get();

let lightBulb2 = new Lightbulb('Коридор');
lightBulb2.get();


let totalCost = lightBulb.result + lightBulb2.result;

console.log(`Всего стоимость потраченной электроэнергии составляет - ${totalCost} р.`);