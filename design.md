# Next.js Todo リスト作成 - まとめ

## 1. 設計

* **機能要件**:
    * 基本機能: Todoの追加、表示、編集、削除、完了/未完了の切り替え
    * 追加機能 (必要に応じて）: 期限の設定、優先度の設定、カテゴリー分け、検索機能、並べ替え機能、データの永続化 (LocalStorage, データベースなど）

* **コンポーネント設計**:
    * 主なコンポーネント: `TodoList`, `TodoItem`, `AddTodoForm`
    * その他 (必要に応じて）: `Filter`, `Sort`

* **データ構造**:
    * Todoアイテム:
        * `id`: 一意な識別子
        * `text`: Todoの内容
        * `completed`: 完了/未完了の状態 (boolean)
        * `dueDate`: 期限 (必要に応じて）
        * `priority`: 優先度 (必要に応じて）
        * `category`: カテゴリー (必要に応じて）

* **状態管理**:
    * `useState`: 比較的小規模なTodoリストであればこれで十分
    * `useReducer`: 状態が複雑になる場合は検討

* **データ永続化**:
    * `localStorage`: ブラウザを閉じてもデータを保持したい場合に利用
    * データベース: ユーザー間でデータを共有したり、大規模なデータを扱う場合に検討

* **UI デザイン**:
    * シンプルで見やすいデザインを心がける
    * 操作しやすいインタフェースにする
    * レスポンシブデザインに対応する

* **その他**:
    * アクセシビリティに配慮する
    * パフォーマンス最適化を検討する
    * テストを記述する

## 2. ファイル構成

### 2.1. `app` ディレクトリ構成 (推奨)

```bash
app/
  layout.tsx          // 共通レイアウト (ヘッダー、フッターなど)
  page.tsx            // Todo リストのメインページ
  components/
    TodoList.tsx       // Todo リスト全体
    TodoItem.tsx       // 個々の Todo アイテム
    AddTodoForm.tsx    // Todo 追加フォーム
  types/
    todo.ts            // Todo の Interface を定義
  (utils/)             // 必要に応じてユーティリティ関数などを配置
```

### 2.2. `pages` ディレクトリ構成

```bash
pages/
  index.tsx           // Todo リストのメインページ
components/
  TodoList.tsx       // Todo リスト全体
  TodoItem.tsx       // 個々の Todo アイテム
  AddTodoForm.tsx    // Todo 追加フォーム
types/
  todo.ts            // Todo の Interface を定義
(utils/)             // 必要に応じてユーティリティ関数などを配置
```

### 2.3. `types/todo.ts` の例

```typescript
// types/todo.ts

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  // 必要に応じて、dueDate, priority, category などのプロパティを追加
}
```

## 3. まとめ

* 設計段階では、機能要件、コンポーネント設計、データ構造、状態管理、データ永続化、UIデザインなどを考慮しました。
* ファイル構成は、`app` ディレクトリ構成と `pages` ディレクトリ構成の2つの選択肢があり、プロジェクトの特性に合わせて選択できます。
* `types` ディレクトリにInterfaceを定義することで、型安全性を高め、コードの保守性を向上させることができます。

このまとめを参考に、Todoリストの実装を進めていきましょう。実装を進める中で、必要に応じて設計やファイル構成をさらに調整することも可能です。不明点や疑問点があれば、お気軽にご質問ください。
