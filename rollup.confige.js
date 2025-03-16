import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts', // Точка входа вашего UI-кита
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs', // CommonJS
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm', // ES Modules
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: ['react', 'react-dom'], // Исключаем зависимости из сборки
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()], // Генерация файла типов
  },
];