async function lock(resource, owner) {
  if (resource.owner && resource.owner !== owner) {
    throw new Error(`${owner} waits for ${resource.owner}`);
  }
  resource.owner = owner;
}
async function demo() {
  const flight1 = {}, flight2 = {};
  try {
    await lock(flight1, 'A'); await lock(flight2, 'B');
    await lock(flight2, 'A'); await lock(flight1, 'B');
  } catch (e) {
    console.log('deadlock risk:', e.message);
  }
  console.log('Production rule: acquire multiple locks in one deterministic order.');
}
demo();
