import styles from './Input.module.css';

export default function Input({ label, error, type = 'text', ...props }) {
  return (
    <section className={styles.inputContainer}>
      {/* إذا مررنا عنوان (label) راح ينعرض هنا */}
      {label && <label className={styles.label}>{label}</label>}
      
      <input 
        type={type} 
        className={`${styles.input} ${error ? styles.inputError : ''}`} 
        {...props} 
      />
      
      {/* إذا مررنا رسالة خطأ راح تنعرض هنا كـ نص */}
      {error && <span className={styles.errorText}>{error}</span>}
    </section>
  );
}
