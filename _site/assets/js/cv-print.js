function handleCvLinkClick(event) {
    event.preventDefault(); // Останавливаем переход по ссылке

    fetch("/assets/files/cv.pdf", { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                // Если файл найден, перейти по ссылке
                window.location.href = "/assets/files/cv.pdf";
            } else {
                // "File not found, opening print dialog."
                window.print();
            }
        })
        .catch(error => {
            // Если произошла ошибка при запросе, вывести сообщение и открыть меню печати
            console.error("Error occurred while checking for file:", error);
            window.print();
        });
}