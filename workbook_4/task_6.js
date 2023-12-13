let imgRegex = /<img[^>]+src="([^">]+)"/g;

let html = `
    <html>
        <body>
            <img src="https://example.com/image1.jpg">
            <img src="https://example.com/image2.png">
            <img src="https://example.com/image3.gif">
        </body>
    </html>
`;

let match;
while ((match = imgRegex.exec(html)) !== null) {
    console.log('Найденный URL-адрес изображения:', match[1]);
}