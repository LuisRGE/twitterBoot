module.exports = async function (context, req) {
    context.log('Probando la funcion');
    context.res = {
        body: "Primer tweet"
    };
};
