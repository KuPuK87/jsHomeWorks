const load = async function(module) {
    return await import('/modules/' + module + '.js');
};

export default load;