// pages/page.tsx
import ExpenseTracker from '../components/ExpenseTracker';  // ใช้เส้นทางที่ถูกต้อง

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ExpenseTracker />
    </div>
  );
}
