module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        // 트랜스 파일링을 잘 해야 인식이 가능하다
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
        '@/utils': '<rootDir>/utils', // will connect to all utiliy related functi/$1ons
        '@/config': '<rootDir>/config',
        '@/hooks': '<rootDir>/src/hooks',
        '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@/services': '<rootDir>/src/services',
        '@/containers/(.*)': '<rootDir>/src/containers/$1',
        '@/pages/(.*)': '<rootDir>/src/pages/$1',
        '@/recoil/(.*)': '<rootDir>/src/recoil/$1',
        '@/constant/(.*)': '<rootDir>/utils/constant/$1',
        '@/components/(.*)': '<rootDir>/src/components/$1', // to all defined compone/$1nts
        '@/public/(.*)': '<rootDir>/public/$1',
    },
};
