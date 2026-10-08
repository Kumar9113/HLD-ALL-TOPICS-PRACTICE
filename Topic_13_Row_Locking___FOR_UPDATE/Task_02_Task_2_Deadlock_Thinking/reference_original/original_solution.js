// Interview/design task:
// Transaction A locks Flight 1 then Flight 2.
// Transaction B locks Flight 2 then Flight 1.
// This can deadlock.
//
// Prevention:
// Always acquire multiple locks in a consistent order.
// Also configure/implement retry for transient deadlock failures.
console.log('Rule: consistent lock ordering reduces deadlocks.');
