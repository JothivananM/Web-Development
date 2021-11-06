let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingCompleted: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingCompleted: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingCompleted: false
    }];

    var newLibrary = library.filter((p) => {
        if(p.readingCompleted == true){
            console.log(p.title);
           return p;
        }
      });
    