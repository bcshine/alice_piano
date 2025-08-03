// 문서가 완전히 로드된 후 실행됩니다
document.addEventListener('DOMContentLoaded', function() {
    // 사장님 인사말 더보기/닫기 기능
    const moreBtn = document.querySelector('.greeting-more-btn');
    const closeBtn = document.querySelector('.greeting-close-btn');
    const shortText = document.querySelector('.greeting-text');
    const fullText = document.querySelector('.greeting-text-full');
    
    // 더보기 버튼 클릭 이벤트
    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            // 짧은 텍스트를 숨기고 전체 텍스트를 표시합니다
            shortText.style.display = 'none';
            fullText.style.display = 'block';
            // 더보기 버튼을 숨기고 닫기 버튼을 표시합니다
            moreBtn.style.display = 'none';
            closeBtn.style.display = 'block';
        });
    }
    
    // 닫기 버튼 클릭 이벤트
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            // 전체 텍스트를 숨기고 짧은 텍스트를 표시합니다
            fullText.style.display = 'none';
            shortText.style.display = 'block';
            // 닫기 버튼을 숨기고 더보기 버튼을 표시합니다
            closeBtn.style.display = 'none';
            moreBtn.style.display = 'block';
        });
    }
    // 헤더 요소를 가져옵니다
    const header = document.querySelector('.header');
    
    // 스크롤 이벤트를 감지합니다
    window.addEventListener('scroll', function() {
        // 스크롤 위치가 50px 이상이면 헤더에 'scrolled' 클래스를 추가합니다
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // 스크롤 위치가 50px 미만이면 헤더에서 'scrolled' 클래스를 제거합니다
            header.classList.remove('scrolled');
        }
    });
    
    // 로그인 버튼 클릭 이벤트를 처리합니다
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', function() {
        // 로그인 버튼 클릭 시 알림 메시지를 표시합니다
        alert('로그인 기능은 현재 준비 중입니다.');
        // 여기에 실제 로그인 기능을 구현할 수 있습니다
    });
    
    // 메뉴 항목 클릭 이벤트를 처리합니다
    const menuItems = document.querySelectorAll('.menu-item a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // href 속성 값을 가져옵니다
            const targetId = this.getAttribute('href');
            
            // 해시태그(#)로 시작하는 내부 링크인 경우에만 처리합니다
            if (targetId && targetId.startsWith('#')) {
                // 기본 링크 동작을 방지합니다
                event.preventDefault();
                
                // 대상 요소를 가져옵니다
                const targetElement = document.querySelector(targetId);
                
                // 대상 요소가 존재하는 경우 스크롤합니다
                if (targetElement) {
                    // 부드러운 스크롤 효과로 해당 섹션으로 이동합니다
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // 클릭한 메뉴 항목의 텍스트를 가져옵니다
                    const menuText = this.textContent;
                    
                    // 아직 구현되지 않은 섹션에 대한 알림을 표시합니다
                    alert('해당 섹션은 현재 준비 중입니다.');
                }
            }
        });
    });
    
    // 히어로 슬라이더 기능 구현
    
    // 현재 슬라이드 인덱스를 저장하는 변수입니다
    let slideIndex = 0;
    // 모든 슬라이드 요소를 가져옵니다
    const slides = document.querySelectorAll('.slide');
    // 자동 슬라이드 타이머를 저장할 변수입니다
    let slideTimer;
    
    // 슬라이드 쇼를 시작하는 함수입니다
    function startSlideShow() {
        // 첫 번째 슬라이드를 표시합니다
        showSlide(slideIndex);
        // 5초마다 다음 슬라이드로 자동 전환합니다
        slideTimer = setInterval(function() {
            // 다음 슬라이드로 이동합니다
            changeSlide(1);
        }, 5000); // 5000밀리초 = 5초
    }
    
    // 특정 슬라이드를 표시하는 함수입니다
    function showSlide(index) {
        // 모든 슬라이드를 숨깁니다
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // 현재 슬라이드를 표시합니다
        slides[index].style.display = "block";
    }
    
    // 슬라이드를 변경하는 함수입니다 (전역 함수로 설정)
    window.changeSlide = function(step) {
        // 자동 슬라이드 타이머를 초기화합니다
        clearInterval(slideTimer);
        // 슬라이드 인덱스를 업데이트합니다
        slideIndex += step;
        // 슬라이드 인덱스가 범위를 벗어나면 조정합니다
        if (slideIndex >= slides.length) {
            slideIndex = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로 돌아갑니다
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동합니다
        }
        // 새 슬라이드를 표시합니다
        showSlide(slideIndex);
        // 자동 슬라이드를 다시 시작합니다
        slideTimer = setInterval(function() {
            changeSlide(1);
        }, 5000);
    };
    
    // 슬라이드 쇼를 시작합니다
    startSlideShow();
    
    // FAQ 토글 기능 구현
    const faqItems = document.querySelectorAll('.faq-item');
    
    // 각 FAQ 아이템에 클릭 이벤트를 추가합니다
    faqItems.forEach(function(item) {
        // FAQ 질문 영역을 가져옵니다
        const question = item.querySelector('.faq-question');
        
        // 질문을 클릭했을 때 실행되는 함수입니다
        question.addEventListener('click', function() {
            // 현재 FAQ 아이템이 활성화되어 있는지 확인합니다
            const isActive = item.classList.contains('active');
            
            // 모든 FAQ 아이템을 닫습니다 (다른 항목들을 모두 비활성화)
            faqItems.forEach(function(otherItem) {
                otherItem.classList.remove('active');
            });
            
            // 현재 클릭한 아이템이 비활성화 상태였다면 활성화합니다
            if (!isActive) {
                item.classList.add('active');
            }
            // 이미 활성화되어 있었다면 그대로 닫힌 상태를 유지합니다
        });
    });
    
    // 플로팅 챗봇 토글 기능 구현
    const floatingChatbot = document.querySelector('.floating-chatbot');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    
    // 챗봇 토글 버튼 클릭 이벤트
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            // 챗봇이 현재 활성화되어 있는지 확인합니다
            const isActive = floatingChatbot.classList.contains('active');
            
            // 활성화 상태를 토글합니다 (켜져있으면 끄고, 꺼져있으면 켭니다)
            if (isActive) {
                floatingChatbot.classList.remove('active');
            } else {
                floatingChatbot.classList.add('active');
            }
        });
    }
    
    // 챗봇 정보창 외부 클릭 시 닫기 기능
    document.addEventListener('click', function(event) {
        // 클릭한 요소가 챗봇 영역 내부가 아닌 경우
        const isClickInsideChatbot = floatingChatbot.contains(event.target);
        
        // 챗봇이 활성화되어 있고, 챗봇 외부를 클릭한 경우 챗봇을 닫습니다
        if (!isClickInsideChatbot && floatingChatbot.classList.contains('active')) {
            floatingChatbot.classList.remove('active');
        }
    });
});