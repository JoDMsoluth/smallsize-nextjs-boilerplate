import { snapshot_UNSTABLE } from 'recoil';
import { changeTheme, themeState } from '../theme';

test('Test changeState', () => {
    const initialSnapshot = snapshot_UNSTABLE();

    expect(initialSnapshot.getLoadable(changeTheme).valueOrThrow()).toBe(
        'white'
    );

    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
        set(themeState, 'dark')
    );

    expect(testSnapshot.getLoadable(changeTheme).valueOrThrow()).toBe('dark');
});
