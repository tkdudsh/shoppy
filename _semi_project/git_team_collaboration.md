# Git 팀협업 작업 로직 (Conflict 해결 포함)

---

## 전체 흐름

| 단계 | 팀장 | 팀원 |
|------|------|------|
| 1 | 레파지토리 생성 | |
| 2 | test.txt 생성 후 push | |
| 3 | 팀원 Collaborator 등록 | |
| 4 | | 레파지토리 clone |
| 5 | | 개인 브랜치 생성 |
| 6 | | test.txt에 이름 입력 후 push |
| 7 | | PR 생성 |
| 8 | PR 확인 | |
| 9 | Conflict 발생 시 resolve | |
| 10 | merge | |
| 11 | | main pull 받기 |

---

## 팀장 작업

```bash
# 1. 레파지토리 생성 후 test.txt 생성
echo "팀원 이름 목록" > test.txt

# 2. push
git add .
git commit -m "init: test.txt 생성"
git push origin main
```

> GitHub에서 `Settings → Collaborators → 팀원 추가`

---

## 팀원 작업

```bash
# 1. 레파지토리 clone
git clone https://github.com/owner/repo.git

# 2. 개인 브랜치 생성
git checkout -b feature/홍길동

# 3. test.txt에 이름 입력 후 저장
# (텍스트 편집기로 이름 추가)

# 4. push
git add test.txt
git commit -m "feat: 홍길동 이름 추가"
git push origin feature/홍길동
```

> GitHub에서 **Pull requests → New pull request → PR 생성**

---

## Conflict 발생

여러 팀원이 같은 줄을 수정한 경우 conflict 발생

```
# GitHub PR 페이지에서 아래 메시지 표시
This branch has conflicts that must be resolved
```

### Conflict 내용 예시

```
팀원 이름 목록
<<<<<<< feature/홍길동
홍길동
=======
김철수
>>>>>>> feature/김철수
```

---

## Conflict 해결 방법

### 방법 1 - GitHub 웹에서 직접 resolve

1. PR 페이지에서 **"Resolve conflicts"** 버튼 클릭
2. 충돌 부분 직접 수정 (`<<<<<<<`, `=======`, `>>>>>>>` 제거 후 내용 합치기)

```
팀원 이름 목록
홍길동
김철수
```

3. **"Mark as resolved"** 클릭
4. **"Commit merge"** 클릭
5. **"Merge pull request"** 클릭

---

### 방법 2 - 로컬에서 resolve 후 push

```bash
# 팀장 로컬에서 작업
git checkout main
git pull origin main

# conflict 난 브랜치 merge 시도
git merge feature/홍길동

# conflict 발생 시 파일 직접 수정
# <<<<<<< ======= >>>>>>> 제거 후 내용 합치기
vim test.txt

# 수정 후 commit
git add test.txt
git commit -m "resolve: conflict 해결"
git push origin main
```

---

## 팀원 동기화 (merge 후)

```bash
git checkout main
git pull origin main
```

---

## 최종 test.txt 결과

```
팀원 이름 목록
홍길동
김철수
이영희
```

---

## Conflict 예방 규칙

- 작업 전 항상 `git pull`로 최신 상태 유지
- 팀원마다 **다른 줄** 작업 권장
- merge 순서를 팀 내에서 **미리 정하기**
- main에 직접 push ❌, 반드시 **개인 브랜치** 사용
