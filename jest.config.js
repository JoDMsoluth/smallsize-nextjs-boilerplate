module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
        '@/services/(.*)': '<rootDir>/src/services/$1',
        '@/containers/(.*)': '<rootDir>/src/containers/$1',
        '@/pages/(.*)': '<rootDir>/src/pages/$1',
        '@/recoil/(.*)': '<rootDir>/src/recoil/$1',
        '@/utils/(.*)': '<rootDir>/utils', // will connect to all utiliy related functi/$1ons
        '@/constant/(.*)': '<rootDir>/utils/constant/$1',
        '@/components/(.*)': '<rootDir>/src/components', // to all defined compone/$1nts
        '@/public/(.*)': '<rootDir>/public/$1',
        '@/config/(.*)': '<rootDir>/config/$1',
    },
};
