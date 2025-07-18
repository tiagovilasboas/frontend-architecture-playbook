import { Title, Text, Stack, Paper, Code, Alert, Badge } from '@mantine/core';
import { IconBulb, IconCheck } from '@tabler/icons-react';

export function ArchitecturePatternsExamples() {
  return (
    <Stack gap="xl">
      <Title order={2} mb="lg">
        <IconBulb
          size={32}
          style={{ verticalAlign: 'middle', marginRight: '8px' }}
        />
        Exemplos de Padrões Arquiteturais
      </Title>

      {/* Clean Architecture */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">
            Clean Architecture
          </Title>

          <div>
            <Badge color="green" mb="xs">
              ✅ Implementação Correta
            </Badge>
            <Code block>
              {`// Domain Layer (Entities)
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  
  isValid() {
    return this.name && this.email.includes('@');
  }
  
  getDisplayName() {
    return this.name.toUpperCase();
  }
}

// Repository Interface (Domain)
interface UserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
}

// Repository Implementation (Infrastructure)
class DatabaseUserRepository implements UserRepository {
  async findById(id: string): Promise<User> {
    const data = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return new User(data.id, data.name, data.email);
  }
  
  async save(user: User): Promise<void> {
    await db.query(
      'INSERT INTO users (id, name, email) VALUES (?, ?, ?)',
      [user.id, user.name, user.email]
    );
  }
}

// Use Case (Application)
class CreateUserUseCase {
  constructor(private userRepo: UserRepository) {}
  
  async execute(userData: { name: string; email: string }) {
    const user = new User(
      generateId(),
      userData.name,
      userData.email
    );
    
    if (!user.isValid()) {
      throw new Error('Invalid user data');
    }
    
    await this.userRepo.save(user);
    return user;
  }
}

// UI Layer (Presentation)
function CreateUserForm() {
  const createUser = useCreateUser();
  
  const handleSubmit = async (data) => {
    try {
      await createUser.execute(data);
      showSuccess('User created successfully!');
    } catch (error) {
      showError(error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <button type="submit">Create User</button>
    </form>
  );
}`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Benefícios:</strong> Testabilidade, independência de
              frameworks, separação clara de responsabilidades.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* Component-Driven */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">
            Component-Driven Development
          </Title>

          <div>
            <Badge color="green" mb="xs">
              ✅ Componentes Reutilizáveis
            </Badge>
            <Code block>
              {`// Atomic Design - Atoms
function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// Molecules
function SearchInput({ onSearch, placeholder = 'Search...' }) {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      <Button type="submit" size="sm">
        Search
      </Button>
    </form>
  );
}

// Organisms
function UserList({ users, onUserSelect }) {
  return (
    <div className="user-list">
      <SearchInput onSearch={(query) => filterUsers(query)} />
      <div className="user-grid">
        {users.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            onClick={() => onUserSelect(user)}
          />
        ))}
      </div>
    </div>
  );
}

// Templates
function DashboardLayout({ sidebar, main, header }) {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        {header}
      </header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          {sidebar}
        </aside>
        <main className="dashboard-main">
          {main}
        </main>
      </div>
    </div>
  );
}

// Pages
function UserDashboardPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  return (
    <DashboardLayout
      header={<AppHeader />}
      sidebar={<UserSidebar />}
      main={
        <div>
          <UserList 
            users={users}
            onUserSelect={setSelectedUser}
          />
          {selectedUser && <UserDetails user={selectedUser} />}
        </div>
      }
    />
  );
}`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Benefícios:</strong> Reutilização, composição, design
              system, desenvolvimento paralelo.
            </Text>
          </Alert>
        </Stack>
      </Paper>

      {/* State Management */}
      <Paper withBorder p="xl" radius="lg">
        <Stack gap="lg">
          <Title order={3} mb="md">
            State Management Patterns
          </Title>

          <div>
            <Badge color="green" mb="xs">
              ✅ Zustand (Simple State)
            </Badge>
            <Code block>
              {`// Store simples
import { create } from 'zustand';

interface UserStore {
  user: User | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  isLoading: false,
  
  login: async (credentials) => {
    set({ isLoading: true });
    try {
      const user = await authService.login(credentials);
      set({ user, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  
  logout: () => {
    set({ user: null });
  },
}));

// Uso no componente
function LoginForm() {
  const { login, isLoading } = useUserStore();
  
  const handleSubmit = async (data) => {
    try {
      await login(data);
      navigate('/dashboard');
    } catch (error) {
      showError(error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}`}
            </Code>
          </div>

          <div>
            <Badge color="green" mb="xs">
              ✅ Redux Toolkit (Complex State)
            </Badge>
            <Code block>
              {`// Slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await api.get('/users');
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items = state.items.filter(
        user => user.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Uso no componente
function UserList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.users);
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {items.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}
            </Code>
          </div>

          <Alert color="green" icon={<IconCheck size={20} />} radius="md">
            <Text size="md" fw={500}>
              <strong>Escolha baseada na complexidade:</strong> Zustand para
              apps simples, Redux Toolkit para apps complexos com muitas
              interações.
            </Text>
          </Alert>
        </Stack>
      </Paper>
    </Stack>
  );
}
