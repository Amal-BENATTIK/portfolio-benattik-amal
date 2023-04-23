export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: '../assets/img/gl/c1.jpg',
                thumbnailImageSrc: '../assets/img/gl/c1.jpg',
                alt: 'DevOps, Cloud, and Agile Foundations',
                title: 'DevOps, Cloud, and Agile Foundations'
            },

            {
                itemImageSrc: '../assets/img/gl/c2',
                thumbnailImageSrc: '../assets/img/gl/c2',
                alt: 'Front-End Web UI Frameworks and Tools:Bootstrap 4',
                title: 'Front-End Web UI Frameworks and Tools:Bootstrap 4'
            },

            {
                itemImageSrc: '../assets/img/gl/c3',
                thumbnailImageSrc: '../assets/img/gl/c3',
                alt: 'Front-End Web Development with React'                ,
                title: 'Front-End Web Development with React'
            },

            {
                itemImageSrc: '../assets/img/gl/c4',
                thumbnailImageSrc: '../assets/img/gl/c4',
                alt: 'Introduction to DevOps',
                title: 'Introduction to DevOps'
            },

            {
                itemImageSrc: '../assets/img/gl/c5',
                thumbnailImageSrc: '../assets/img/gl/c5',
                alt: 'Introduction to Agile Development and Scrum',
                title: 'Introduction to Agile Development and Scrum'
            },

            {
                itemImageSrc: '../assets/img/gl/c6',
                thumbnailImageSrc: '../assets/img/gl/c6',
                alt: 'Introduction to Cloud Computing',
                title: 'Introduction to Cloud Computing'
            },

            {
                itemImageSrc: '../assets/img/gl/c7',
                thumbnailImageSrc: '../assets/img/gl/c7',
                alt: 'Advanced React',
                title: 'Advanced React'
            }
                    ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

