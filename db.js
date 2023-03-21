
function getStudent(id, callback) {
    setTimeout(() => {
        console.log('Reading a student from a database...');
        callback({ id: id, name: 'Mosh' });
    }, 2000);
}