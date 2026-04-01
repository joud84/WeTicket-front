import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', // نوع الزر (أساسي أو ثانوي)
  disabled = false,    // هل الزر معطل؟
  loading = false,     // هل فيه حالة تحميل؟
  ...props 
}) {
  return (
    <button 
      // دمج كلاس الزر الأساسي مع كلاس النوع (primary أو secondary)
      className={`${styles.btn} ${styles[variant]}`} 
      disabled={disabled || loading} 
      {...props}
    >
      {loading ? 'جاري التحميل...' : children}
    </button>
  );
}
