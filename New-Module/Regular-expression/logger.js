function getModules() {
    this.tabs = function () {
        console.log('get tabs');
    };

    this.slider = function () {
        console.log('get slider');
    };

    this.modal = function () {
        console.log('get modal');
    };
}
export default getModules;
