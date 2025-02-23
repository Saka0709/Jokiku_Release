const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Tutup semua FAQ lain
    document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
      if (otherAnswer !== answer) {
        otherAnswer.classList.remove('show');
        otherAnswer.style.maxHeight = null; // Reset height
      }
    });

    // Tutup semua ikon lainnya
    document.querySelectorAll('.faq-question').forEach(otherQuestion => {
      if (otherQuestion !== question) {
        otherQuestion.classList.remove('open');
      }
    });

    // Toggle FAQ yang diklik
    if (answer.classList.contains('show')) {
      answer.classList.remove('show');
      answer.style.maxHeight = null;
    } else {
      answer.classList.add('show');
      answer.style.maxHeight = answer.scrollHeight + 'px'; // Atur tinggi sesuai konten
      question.classList.add('open'); // Tambahkan kelas untuk ikon rotasi
    }
  });
});
